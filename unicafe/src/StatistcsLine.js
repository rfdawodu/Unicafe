// const StatisticsLine = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad;
//   const average = good - bad / total;
//   const positivePercentage = (good / total) * 100;

//   return (
//     <>
//       <h2>Statistics</h2>
//       <p>total {total}</p>
//       <p>average {average}</p>
//       <p>positivePercentage {positivePercentage}</p>
//     </>
//   );
// };

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>

        <td>{value}</td>
      </tr>
    </>
  );
};

export default StatisticsLine;
