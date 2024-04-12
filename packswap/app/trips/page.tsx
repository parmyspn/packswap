import SearchResultTable from "../components/search/SearchResultTable";
import TripsSearch from "../components/search/TripsSearch";
import Trip from "../components/trip/trip";

const TripsPage = async () => {
  return (
    <>
      <div className="h-screen w-screen bg-gray-300">
        <TripsSearch />;
        <SearchResultTable />
      </div>
    </>
  );
};

export default TripsPage;
