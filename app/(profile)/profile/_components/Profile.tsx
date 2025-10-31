'use client';
import NonEdit from './NonEdit';
import EditForm from './EditForm';

interface ProfilePageProps {
  isEdit: boolean;
}

const Profile = (props: ProfilePageProps) => {
  if (props.isEdit) {
    return <EditForm />;
  } else {
    return <NonEdit />;
  }
};

export default Profile;
