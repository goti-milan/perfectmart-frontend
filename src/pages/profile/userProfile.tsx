import { Avatar, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';




const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('User Name');
  const [email, setEmail] = useState('user@example.com');
  const [location, setLocation] = useState('City, Country');

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
    }}>
      <Avatar
        alt="Profile"
        src="profile-pic.jpg"
        sx={{
          width: '100px',
          height: '100px',
          marginBottom: '16px',
        }}
      />
      {isEditing ? (
        <div style={{ textAlign: 'center' }}>
          <TextField
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h6">{userName}</Typography>
          <Typography variant="body1">Email: {email}</Typography>
          <Typography variant="body1">Location: {location}</Typography>
          <Button onClick={() => setIsEditing(true)} variant="outlined" color="primary">
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
