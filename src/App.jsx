import Clock from "./Clock";

function App() {
  return (
    <div>
      <nav className="flex flex-col justify-between p-8 bg-blue-400 items-center ">
        <h1 className="text-4xl font-extrabold text-white">World Time</h1>
        <ul className="flex space-x-4">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="flex p-8 space-x-0 md:space-x-2">
        <Clock city="Paris" timeZone="Europe/Paris" />
        <Clock city="Stockholm" timeZone="Europe/Stockholm" />
        <Clock city="New York" timeZone="America/New_York" />
        <Clock city="Sydney" timeZone="Australia/Sydney" />
      </main>
    </div>
  );
}

export default App;
