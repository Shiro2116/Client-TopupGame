import React from "react";
import Image from "next/image";
import SignupForm from "../../components/organisms/SignupForm";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link href="/">
                <p className="navbar-brand">
                  <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                </p>
              </Link>
            </div>
            <SignupForm />
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
