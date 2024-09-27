interface GreetingProps {
  name: string; // 'name' prop is of type string
}

// Define the Greeting component with props typed using GreetingProps interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
