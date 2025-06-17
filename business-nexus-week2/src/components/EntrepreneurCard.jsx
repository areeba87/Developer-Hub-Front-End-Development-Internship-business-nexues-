import { Link } from 'react-router-dom';

const EntrepreneurCard = ({ data }) => {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-lg font-bold">{data.name}</h3>
      <p>{data.startup}</p>
      <p>{data.summary}</p>
      <Link to={`/profile/entrepreneur/${data.id}`} className="text-blue-500 underline">
        View Full Profile
      </Link>
    </div>
  );
};

export default EntrepreneurCard;