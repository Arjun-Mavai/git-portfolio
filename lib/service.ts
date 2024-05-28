import cookie from "cookie";
import jwt_decode from "jwt-decode";

export async function getData( ) {
   const cookies = cookie.parse(req.headers.cookie || "");
  const tokenValue = cookies.accessToken
    ? JSON.parse(cookies.accessToken)
    : null;

  console.log("Checking token", tokenValue);

  
//  
// 
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/checkRegistra `,
    {
      headers: {
        Authorization: `Bearer ${tokenValue.jwt}`,
      },
    }
  );

  const data = await response.json();
  console.log("Fetch Response:", JSON.stringify(data, null, 2));

  if (response.status === 200) {
    return {
      props: { isOpen: true, message: data },
    };
  } else if (response.status === 400) {
    return { props: { isOpen: false, message: data?.message } };
  }

  return {
    props: {
      isOpen: false,
      message: "not started",
    },
  };
}
