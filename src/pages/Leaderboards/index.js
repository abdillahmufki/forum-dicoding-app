import { Skeleton } from "@mui/material";
import Layout2 from "../../components/Layout/Layout2";
import { useGetLeaderboardsQuery } from "../../states/features/leaderboards";


export default function Leaderboards() {
    const { data, isError, isLoading, isSuccess } = useGetLeaderboardsQuery();
    return (
        <Layout2>
            <section className="card-board">
                <div className="title" style={{ textAlign: "center" }}>Klasmen Pengguna Aktif</div>
                <div className="leaderboards-list">
                    <header>
                        <div>Pengguna</div>
                        <div>Skor</div>
                    </header>
                    {
                        isLoading ?
                            [...Array(6)].map(i =>
                                <div className="leaderboards-item" key={i}>
                                    <div className="leaderboards-item__user-info">
                                        <Skeleton animation="wave" variant="circular" width={50} height={50} />
                                        <Skeleton animation="wave" variant="rectangular" width={200} height={30} />
                                    </div>
                                    <Skeleton animation="wave" variant="rectangular" width={50} height={50} />
                                </div>
                            )
                            :
                            data?.data?.leaderboards?.map((item, index) =>
                                <div className="leaderboards-item">
                                    <div className="leaderboards-item__user-info">
                                        <img src={item.user.avatar} />
                                        <div>{item.user.name}</div>
                                    </div>
                                    <div className="leaderboards-item__score">{item.score}</div>
                                </div>
                            )
                    }
                </div>
            </section>
        </Layout2>
    )
}

