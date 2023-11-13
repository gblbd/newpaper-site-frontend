import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <Link href="/dashboard">
        {" "}
        <p>home</p>
      </Link>
      <Link href="/dashboard/dashboard-upload-news">
        {" "}
        <p>upload</p>
      </Link>
    </div>
  );
};

export default Sidebar;
