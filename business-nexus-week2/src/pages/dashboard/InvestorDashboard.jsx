import DashboardLayout from '../../layouts/DashboardLayout';
import EntrepreneurCard from '../../components/EntrepreneurCard';
import entrepreneurs from '../../assets/entrepreneurs.json';

const InvestorDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Entrepreneurs List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {entrepreneurs.map((entrepreneur) => (
          <EntrepreneurCard key={entrepreneur.id} data={entrepreneur} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default InvestorDashboard;