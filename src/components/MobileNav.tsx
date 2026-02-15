import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const item = (to: string, label: string, svg: React.ReactNode) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex-1 py-2 flex flex-col items-center justify-center text-sm ${
          isActive ? "text-blue-600" : "text-gray-400"
        {item(
          '/home',
          'Home',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 11.5L12 4l9 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        )}
        {item(
          '/fall',
          'Fall',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7v6c0 5 6 9 10 9s10-4 10-9V7l-10-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>,
        )}
        {item(
          '/heart',
          'Monitor',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s-6.716-4.35-9.09-6.646C.94 11.968 4.039 6 8.848 6c2.35 0 3.698 1.39 3.152 3.03C11.858 6 13.225 4 15.495 4 20.176 4 23.064 10.11 20.09 14.354 17.468 18.09 12 21 12 21z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        )}
        {item(
          '/settings',
          'Settings',
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2v20M5 7h14M5 17h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        )}
          "Settings",
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2v20M5 7h14M5 17h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>,
        )}
      </div>
    </nav>
  );
}
