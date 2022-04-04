import styles from '../../styles/components/Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Carlos-hr.png" alt="name" />

      <div>
        <strong>Carlos Henrique</strong>
        <p>Level 100</p>
      </div>
    </div>
  );
};

export default Profile;
