import { createClient } from "next-sanity";


export default function IndexPage({ pets, posts }) {
  return (
    <>
      <header>
        <h1>*a o m*</h1>
      </header>
      <main>

        <h2>an olive martini</h2>
        <hr></hr>
        <br></br>
        {/* {pets.length > 0 && (
          <ul>
            {pets.map((pet) => (
              <div>
              <li key={pet._id}>{pet?.name}</li>
              <p>{pet?.name}</p>
              </div>
            ))}
          </ul>
        )} */}
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <div>
              <li key={post.title}> {post?.content}</li>
              <p>{post.title}</p>
              </div>
            ))}
          </ul>
        )}
        {!pets.length > 0 && <p>No pets to show</p>}
        {/* {pets.length > 0 && (
          <div>
            <pre>{JSON.stringify(pets, null, 2)}</pre>
          </div>
        )} */}
        {/* {!pets.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )} */}
      </main>
    </>
  );
}

const client = createClient({
  projectId: 'ohlofr96',
  dataset: 'production',
  // Add other configurations as needed
});

// const client = createClient();
export async function getServerSideProps({ params }) {

  const pets = await client.fetch(`*[_type == "pet"]`);
  const posts = await client.fetch(`*[_type == "post"]`);
  return {
    props: {
     
        'pets': pets,
        'posts': posts
      
    }
  };
  // const query = `[_type == 'page' && slug.current == $slug][0]`;
  // const page = client.fetch(query, { slug: params.slug });
  // return {
  //   props: {
  //     page
  //   }
  // }
}
// export async function getServerSideProps(context) {



// export async function getStaticProps() {
//   // const pets = [
//   //   /* {
//   //     _createdAt: "2022-03-08T09:28:00Z",
//   //     _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
//   //     _rev: "xnBg0xhUDzo561jnWODd5e",
//   //     _type: "pet",
//   //     _updatedAt: "2022-03-08T09:28:00Z",
//   //     name: "Bamse"
//   //   } */
//   // ];
//   // const pets = await client.fetch(`*[_type == "pet"]`);
//   // const posts = await client.fetch(`*[_type == "post"]`);

//   // return {
//   //   props: {
     
//   //       'pets': pets,
//   //       'posts': posts
      
//   //   }
//   // };
// }
