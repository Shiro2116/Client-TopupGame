import Link from "next/link";

interface AuthProps {
  isLogin?: boolean;
}

function Auth(props: Partial<AuthProps>) {
  const toggle = () => {
    const toggle1 = document.querySelector("#toggleku");
    toggle1?.classList.toggle("toggleku");
  };
  const { isLogin } = props;
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggle}>
            <img src="/img/avatar-1.png" className="rounded-circle" width="40" height="40" alt="" />
          </a>

          <ul id="toggleku" className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member" className="n-u">
                <p className="dropdown-item text-lg color-palette-2">My Profile</p>
              </Link>
            </li>
            <li>
              <Link href="/" className="n-u">
                <p className="dropdown-item text-lg color-palette-2">Wallet</p>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile" className="n-u">
                <p className="dropdown-item text-lg color-palette-2">Account Settings</p>
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="n-u">
                <p className="dropdown-item text-lg color-palette-2">Log Out</p>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <div>
      <li className="nav-item my-auto">
        <Link href="/sign-in" className="n-u">
          <p className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button">
            Sign In
          </p>
        </Link>
      </li>
    </div>
  );
}

export default Auth;
