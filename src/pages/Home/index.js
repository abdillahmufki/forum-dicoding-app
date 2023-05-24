
import {
  useGetThreadsQuery,
} from '../../states/features/threads';
import ThreadList from '../../components/ThreadList';
import Layout from '../../components/Layout';
import AddButton from '../../components/AddButton';

function Home() {
  const getThreadsResponse = useGetThreadsQuery();

  return (
    <Layout className="">
      <section>
        <h3 className='title'>Diskusi Tersedia</h3>
        {
          getThreadsResponse?.data?.data?.threads?.map((thread, index) =>
            <ThreadList
              key={thread.id}
              no={index + 1}
              data={thread}
            />
          )
        }
      </section>


      <AddButton />
    </Layout>
  );
}

export default Home;
