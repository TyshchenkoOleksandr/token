import React, { FC, useEffect, useState } from 'react';
import useAxios from 'axios-hooks';

import { api } from '../../configs/urls/api';
import PageWrapper from '../../components/pageWrapper/PageWrapper';

const UsersList: FC = () => {
  const [users, setUsers] = useState<{_id: string, email: string, password: string}[]>([]);

  const [{}, usersRequest] = useAxios({ url: api.users });

  useEffect(() => {
    usersRequest()
      .then((response) => setUsers(response.data));
  }, []);

  const list = users.map((user) => {
    return (
      <li key={user._id}>{user.email}</li>
    );
  });

  return (
    <PageWrapper>
      <ul>
        {list}
      </ul>
    </PageWrapper>
  );
};

export default UsersList;
