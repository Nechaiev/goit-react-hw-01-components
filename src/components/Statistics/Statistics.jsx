import PropTypes from 'prop-types';
import s from './Statistics.module.css';

// const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];
function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

const Statistics = ({ title, stats }) => {
  return (
    <div className={s.statisticsContainer}>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }, index) => (
            <li
              className={title ? s.statListItem : s.statListItemNoTitle}
              // className={s.item}
              key={id}
              // style={{ background: colors[index] }}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
// import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Statistics.module.css';

// const StatsListitem = ({ id, label, percentage }) => {
//   return (
//     <li key={id} className="item">
//       <span className={s.label}>{label}</span>
//       <span className={s.percentage}>{percentage}</span>
//     </li>
//   );
// };

// const StatsList = ({ items }) => {
//   if (items.length === 0) return null;
//   return <ul className={s.statList}>{items.map(StatsListitem)}</ul>;
// };

// const Statistics = ({ items }) => {
//   return (
//     <section className={s.statistics}>
//       <h2 className={s.title}>Upload stats</h2>

//       <StatsList items={items} />
//     </section>
//   );
// };

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default Statistics;
