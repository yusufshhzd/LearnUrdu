import { Stack, Typography } from '@mui/material';
import ContainedButton from '../components/ContainedButton';
import { useNavigate } from 'react-router-dom';
import SimplePresent from './SimplePresent';

function Home() {

  const navigate = useNavigate();

  
  return (
    <div className='App' style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h6" style={{ position: 'absolute', top: '10%', textAlign: 'center' }}>
        Present Tenses
      </Typography>
      <Typography variant="h6" style={{ position: 'absolute', top: '40%', textAlign: 'center' }}>
        Past Tenses
      </Typography>
      <Typography variant="h6" style={{ position: 'absolute', top: '65%', textAlign: 'center' }}>
        Future Tenses
      </Typography>

      <div>
        <Stack spacing={20} direction='row' className='button'>
          <Stack spacing={20} direction='column'>
            <ContainedButton text={"Simple\nPresent"} onClick={() => navigate('/simple-present')} />
            <ContainedButton text={"Simple\nPast"} />
            <ContainedButton text={"Simple\nFuture"} />
          </Stack>

          <Stack spacing={20} direction='column'>
            <ContainedButton text={"Present\nContinuous"} />
            <ContainedButton text={"Past\nContinuous"} />
            <ContainedButton text={"Future\nContinuous"} />
          </Stack>

          <Stack spacing={20} direction='column'>
            <ContainedButton text={"Present\nPerfect"} />
            <ContainedButton text={"Past\nPerfect"} />
            <ContainedButton text={"Future\nPerfect"} />
          </Stack>

          <Stack spacing={20} direction='column'>
            <ContainedButton text={"Present\nPerfect\nContinuous"} />
            <ContainedButton text={"Past\nPerfect\nContinuous"} />
            <ContainedButton text={"Future\nPerfect\nContinuous"} />
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Home;
