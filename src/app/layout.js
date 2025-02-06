import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


// w-1/2  = width: 50%
// w-1/3  = width: 33.333333%
// w-2/3  = width: 66.666667%
// w-1/4  = width: 25%
// w-2/4  = width: 50%
// w-3/4  = width: 75%
// w-1/5  = width: 20%
// w-2/5  = width: 40%
// w-3/5  = width: 60%
// w-4/5  = width: 80%
// w-1/6  = width: 16.666667%
// w-2/6  = width: 33.333333%
// w-3/6  = width: 50%
// w-4/6  = width: 66.666667%
// w-5/6  = width: 83.333333%