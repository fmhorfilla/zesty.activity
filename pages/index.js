import Head from 'next/head'
import DOMPurify from 'isomorphic-dompurify';

export const getStaticProps = async () => {
  const res = await fetch (`https://www.zesty.io/-/gql/platform_section.json`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name='keywords'  content='web development, programming'/>
      </Head>
      {data.map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(data.text_content)}}></div>
        </div>        
      ))}

    </div>
  )
}
