import { Search } from "@/components/Search/Search";

export default function Home() {  

  return (
    <div  > 
        <title>Weather App</title>
        <meta
          name="An app showing weather details"
          content="upgrade-insecure-requests"
          http-equiv="Content-Security-Policy" 
        />
        <button className="p-3 border border-green-200 rounded-lg mx-6 my-6">
          <a href="/admin">See Users</a>
        </button> 
        <Search /> 
    </div>
  );
}
