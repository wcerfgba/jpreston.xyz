const datefns = require("date-fns");
const fs = require("fs");
const glob = require("glob");
const graymatter = require("gray-matter");

const dateString = (date) => datefns.format(date, "yyyy-MM-dd");

const replaceCreatedAt = ({ path }) => {
  const stats = fs.statSync(path);
  return dateString(stats.birthtime);
};

const replaceModifiedAt = ({ path }) => {
  const stats = fs.statSync(path);
  return dateString(stats.mtime);
};

function updateFields(pattern, updates) {
  glob.sync(pattern)
      .map(path => ({ ...graymatter.read(path),
                      path: path }))
      .map(matter => ({ ...matter,
                        data: { ...matter.data,
                                ...(Object.fromEntries(
                                      Object.entries(updates)
                                            .map(([k, v]) => ([k, v(matter)])))) }}))
      .map(matter => fs.writeFileSync(matter.path, graymatter.stringify(matter)));
}

updateFields("**/*.markdown", { "date": replaceCreatedAt,
                                "modified_at": replaceModifiedAt });
