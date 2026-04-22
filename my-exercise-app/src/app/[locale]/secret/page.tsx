import Link from 'next/link';
import React from 'react'



async function SecretPage() {
    const isDefined = process.env.EXERCISE_SECRET;
 
 
    return (
      <div>
          <p>
          Secret Defined: {isDefined ? "yes" : "no"}
              
          </p>
          <Link href={"/secret/secret-client"}>Go to Client Page</Link>
      
      </div>
  )
}

export default SecretPage