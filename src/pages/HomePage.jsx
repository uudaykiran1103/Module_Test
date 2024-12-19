import React from 'react'
import Banner from '../components/Banner';
import GroupsHandler from '../components/Hoc/GroupsHandler';

const HomePage = () => {
  return (
    <GroupsHandler>
      <Banner/>
    </GroupsHandler>
  )
}
export default HomePage

