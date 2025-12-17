import Container from '../components/Container';

export default function Raft() {
  return (
    <Container title="Raft – Manuel Cocoba">
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

