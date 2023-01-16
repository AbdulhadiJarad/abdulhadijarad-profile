import type { NextPage } from "next";
import DownAnimation from "../Components/Animation/DownAnimation";
import { style } from "./styles";

const MinProjects: NextPage = () => {
  return (
    <section id="projects" style={style.root}>
      <span className="bold" style={style.myNameIs}>Other Noteworthy Projects </span>
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
          flexWrap: "wrap",
          gap: 10,
          width: "100%",
        }}
        className={'startups'}
      >
        {new Array(9).fill(undefined).map(() => (
          <DownAnimation >
            <div
              style={{
                height: '100%',
                width: 300,
                backgroundColor: "#112240",
                borderRadius: "10px",
                padding: '20px',
                margin: '5px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '40px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" fill="rgb(17, 34, 64)" viewBox="0 0 24 24" stroke="rgb(100, 255, 218)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div style={{ width: '25px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" fill="rgb(17, 34, 64)" viewBox="0 0 24 24" stroke="#a8b2d1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
              </div>
              <div style={{ color: '#ccd6f6', marginTop: '20px', fontWeight: '500', fontSize: '19px' }}>
                Integrating Algolia Search with WordPress Multisite
              </div>
              <div style={{ marginTop: '10px' }}>
                <div style={{ color: '#a8b2d1', lineHeight: '24px', fontSize: '13px' }}>
                  Building a custom multisite compatible WordPress plugin to build global search with Algolia
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <div style={{ color: '#8791b0', lineHeight: '24px', fontSize: '13px', display: 'flex', justifyContent: 'flex-start', gap: '15px' }}>
                  <div>
                    NextJs
                  </div>
                  <div>
                    GraphQL
                  </div>
                  <div>
                    ReactJS
                  </div>
                  <div>
                    MUI
                  </div>
                </div>
              </div>
            </div>
          </DownAnimation>
        ))}
      </section>
    </section>
  );
};

export default MinProjects;
