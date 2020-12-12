import React, { useContext } from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { MdLocationOn, MdLink, MdMailOutline } from "react-icons/md";
import { BsBuilding } from "react-icons/bs"; 

import { GithubContext } from "../../../../context/context";

const User = () => {
  const { githubUser } = useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    twitter_username,
    name,
    company,
    bio,
    location,
    blog,
    email,
  } = githubUser; 

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name}></img>
        <BasicInfo>
          <h4>{name}</h4>
          <p>{twitter_username ? `@${twitter_username}` : null}</p>
        </BasicInfo>
      </header>

      <p className="bio">{bio}</p>
      {html_url ? (
        <div>
          <GoMarkGithub />
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {html_url}
          </a>
        </div>
      ) : null}

      {company ? (
        <div>
          <BsBuilding />
          {company}
        </div>
      ) : null}

      {location ? (
        <div>
          <MdLocationOn />
          {location}
        </div>
      ) : null}

      {blog ? (
        <div>
          <MdLink />
          <a href={`https://${blog}`} target="_blank" rel="noopener noreferrer">
            {blog}
          </a>
        </div>
      ) : null}

      {email ? (
        <div>
          <MdMailOutline />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px;
  padding: 15px;
  border: 1px solid #eaedf3;
  border-radius: 4px;

  header {
    display: flex;
    flex-direction: row;
  }

  img {
    height: 75px;
    width: 75px;
    border-radius: 50%;
  }
`;

const BasicInfo = styled.div`
  margin-left: 10px;
`;

export default User;
