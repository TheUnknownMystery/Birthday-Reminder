import React, { useEffect, useState, Suspense, lazy } from 'react';
import fetchRandomUsers from '../components/fakeData';

//skeleton component
import SkeletonCard from '../components/SkeletonCard';
import SkeletonHeader from '../components/SkeletonHeader';

//components
const Header = lazy(() => import('../components/Header'));
const InvitedCard = lazy(() => import('../components/InvitedCard'));

function HomeScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchRandomUsers().then((data) => {
      setUsers((prevUsers) => [...prevUsers, ...data]);
    });
  }, []);

  const handleDelete = (name) => {
    setUsers((prevUsers) =>
      prevUsers.filter(
        (user) => `${user.name.first} ${user.name.last}` !== name
      )
    );
  };

  return (
    <div className="Root-Card">
      <Suspense key={0} fallback={<SkeletonHeader />}>
        <Header BirthDayNumber={users.length} />
      </Suspense>

      {!users.length && <p className="Root-Card__NotFound">Not Found</p>}

      {users.map((user, index) => (
        <Suspense key={index} fallback={<SkeletonCard />}>
          <React.Fragment key={index}>
            <InvitedCard
              first_name={user.name.first}
              last_name={user.name.last}
              age={user.dob.age}
              url={user.picture.large}
              id={index}
              handleDelete={handleDelete}
            />
          </React.Fragment>
        </Suspense>
      ))}
    </div>
  );
}

export default HomeScreen;
