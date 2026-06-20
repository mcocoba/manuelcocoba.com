import Container from '../components/Container';

export default function Raffle() {
  return (
    <Container title="Raffle – Manuel Cocoba">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img
          src="/static/images/monkey.gif"
          alt="Monkey"
          className="max-w-full h-auto"
          style={{ maxWidth: '800px', width: '100%' }}
        />
      </div>
    </Container>
  );
}

