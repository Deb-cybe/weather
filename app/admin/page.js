"use client";
import { useAuthContext } from "@/context/AuthContext";
import { db } from "@/lib/config";
import signout from "@/lib/signout";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const [userData, setUserData] = useState([]);
  const { user } = useAuthContext();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const { result, error } = await signout();
      if (error) {
        console.error(error);
        return;
      }
      console.log(result);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [router, user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userDataArray = querySnapshot?.docs?.map((doc) => ({ ...doc.data() }));
        setUserData(userDataArray);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-60 my-20  p-4  rounded-md shadow-md">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleSignOut}
      >
        Logout
      </button>
      <button>
        <a href="/" className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
          See Weather
        </a>
      </button>
      <table className=" mt-4">
        <thead>
          <tr >
            <th className="px-5 py-2">Name</th>
            <th className="px-5 py-2">Date Added</th>
            <th className="px-5 py-2">Status</th>
            {/* Add additional table headers for other fields */}
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="px-5 py-2">{user.name}</td>
              <td className="px-5 py-2">
                {user.createdAt.toDate().toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    }) + ', ' + user.createdAt.toDate().toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                    })}
              </td>
              <td className="px-5 py-2">Active</td>
              {/* Add additional table cells for other fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
