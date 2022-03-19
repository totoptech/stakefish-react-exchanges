import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BackButton = styled.button`
    cursor: pointer;
    padding: 8px 24px;
`;
const LogoContainer = styled.div`
    display: flex;
`;
const SocialContainer = styled.div`
    display: flex;
    margin: 20px 0;

    a {
        margin-right: 8px;
    }
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 8px;
`;

const socials = [
    {
        name: "twitter_handle",
        icon: "twitter"
    },
    {
        name: "telegram_url",
        icon: "telegram"
    },
    {
        name: "reddit_url",
        icon: "reddit"
    },
    {
        name: "slack_url",
        icon: "slack"
    },
    {
        name: "facebook_url",
        icon: "facebook"
    }
];
export default function Exchange() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    };

    const getSocialUrl = (name, url) => {
        return name === "twitter_handle" ? `https://twitter.com/${url}` : url;
    };

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/exchanges/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((dt) => {
                setData(dt);
                console.log("I am dat", dt);
            });
    }, [id]);

    return (
        <div style={{ marginTop: 50 }}>
            <LogoContainer>
                <Logo src={data.image} alt="Logo" />
                <p>{data.name}</p>
            </LogoContainer>
            <p>{data.description}</p>
            <p>Country: {data.country}</p>
            <p>Trust Rank: {data.trust_score_rank}</p>
            <p>Established: {data.year_established}</p>
            <SocialContainer>
                {socials
                    .filter((social) => data[social.name])
                    .map((social) => (
                        <a
                            href={getSocialUrl(social.name, data[social.name])}
                            key={social.icon}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={`/assets/images/${social.icon}.svg`}
                                alt={social.icon}
                                width={32}
                                height={32}
                            />
                        </a>
                    ))}
            </SocialContainer>
            <BackButton onClick={() => redirectToHome()}>Back</BackButton>
        </div>
    );
}
