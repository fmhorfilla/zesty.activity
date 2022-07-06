import DOMPurify from 'isomorphic-dompurify';

export const getStaticProps = async () => {
    const res = await fetch (`https://www.zesty.io/-/instant/7-e93178-vqvclg.json`)
    const data = await res.json()
  
    return {
      props: {
        data 
      }
    }
}

const about = ({data}) => {
    return (
        <div>
            {data.data.map((data, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(data.content.page_content)}}></div>        
            ))}
        </div>
    )
}

export default about