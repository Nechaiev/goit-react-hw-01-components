import PropTypes from 'prop-types';
import s from './Statistics.module.css';

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
              key={id}
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
