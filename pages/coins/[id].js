import axios from "axios";
const id = ({ getData }) => {
    return (
        <div>
            <h3> {getData.body} </h3>
            <h4> {getData.title} </h4>
        </div>
    );
};

export const getStaticPaths = async () => {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const paths = post.data.map((poste) => ({
        params: { id: `${poste.id}` },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );

    return {
        props: {
            getData: data.data,
        },
    };
};

export default id;
