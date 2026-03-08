import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0wMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xAA8EAACAQMBBAYHBgQHAAAAAAAAAQIDBBEFBhIhMQciQVFhcRMUMoGRobEVQlJywdEjM0OSJDRTYoLC4f/EABoBAQADAQEBAAAAAAAAAAAAAAABBAUDAgb/xAArEQEAAgIBAwMDBAIDAAAAAAAAAQIDETEEEiEFMkFRcYETIzNhItEUQsH/2gAMAwEAAhEDEQA/AKDWYYAAgAAYENgR2ok48sJrN051PV4S6sfax2so58kzPbDR6XFqO6WMKy2AAAAAAAYAv2lxK3qb0eKfNd50xW7bOWekXp5ZuFSNSClDin8i9E7ZQSAEAQ2QKWwlGQIIEAZY6vABAAAwIbAhgUTluQlJ8kss8zPhNY3Omqyk5zlKXNvLMyZ3O21WNRpNOFSrVhSpQlOc3uxjFZcn3Ij7p19G02+wGt1LOVeoqNGajmNCcnvyfc+xfE4f8ikTp2jBaY21apCdKrOlWg4VIPdnCXBxfczvzw5a+qlcuIQAAAAAwPZbVpUmnHjnmu8u47f4wy8tdXmGTp1I1YKUeR124qiRDZApyEoAggQ2BGQMudXNASAGBDYEMCCBZvP8pW/I/oeb+2XvH74+7V+XHl3mZHDZl1Xo/wBnYadYQ1K6gne3Ecxz/SpvsXc32lHPkm06jhcw49RuW4JY4FdY5YHaPZaw15ekqp0bpLEa8Ob/ADL7yOuPLNHLJii7nGsbIaxpTblQ9YoL+rQ6y965ouUzUsqWxWqwEurPcl7S5p8GdXMAhyWM8vMHL0wsbypRlXp2teVGKy5qm8fEjuhOpefnklErtLjBFrD7VDqY1dfo1JUpZi/Nd52iVbTI060asFKL813HpCcgQJEMgQBTzIADLnZ4ADAhgQBBAgC3cLNvUX+1/Q824l7x++GF0Cx+0dasrRrMalVb/wCVcX8kZN7dtZlt1jdoh3VJJJJcEuBmb35aXHhIAkORA8V5pOnXyxd2VvV/NTR7i9o4l5mlZ5hjZ7G7PSeZafTj+VtHr9e/1eP0afR6LXZnRLSalR023UlylKGX8yJy3nmUxipHEMtGEVFQiko8sJcDw9+HH9vNJp6VrsnbR3be6j6WEUsKLziS+P1L/T37qKWanbZgaPsvzL+Hhl9V7oXDsrKqdR05b0fgTtEvfTqxqRzF8e1E7QqYEAUkABGQMwdngAgCAIIACGEo3JVX6OEXOU+qortZ5tMRWZl6pEzaNcp6O7SrT2tULinKnUo0JycZrDT4JcPeYnUW/b3Dfwx+5qXWCivAAAAAdmOwAAA550s0+OmVMZadSH0/Yt9J8qvU/DSJW1e2jH09GpS9It6O/FreXeafTzE18Sx+qie+Nx8KTurAFUJuEspkoe6nVVSOVz7UBUwhAENgUgZo7PCAIAggGBAShgZrY6nGprkN7juU5zXny/Uo9fMxh8fVd9PrvP8AhubsKD1SGopKNeNKVOT/ABRfLJid09um/wBn+W3sPL2AAAAAAAAY7UdJoaleWVe5ipq2k5xg+Tk1hZPdbTETEPFqxbW2udJ9KEtLs6zS3419xcOOHF5+iLnp1p75j+mf6nEdkff/AMc3NZjgACqE3B5RKHrp1FNZXPtArbCFIADMnZ4QBBAAQEoZAhgZLZq4VtrdrOXsyluP3rH1wVusp34Zj8rXRX7M8T+HSPI+efSgAAAAAAAAABoPSjeL/A2K5reqy8Oxfqafp9Ob/hkepX9tfy0E0mWAAAFUZODyuZKHppzU1lc+1AVthCgDNnZ4QQAEBKAIZAhhMIzhrDaeeDRE6+T5dC2f12jqFvCFWpGN2liUG8OfijB6rpbYrTMcPoOk6uuWsRblmvgVF4AAAAAAAA8Wq6rZ6Tbyq3teFPCe7HPWn4Jdp0x4rZJ1EOWTLXHG7OPa1qVXVtSq3lXhvvqx/DHsRu4scYq9kPnc2Wct5u8J0cwAAAATGTi8rmEPRCakvEkVBDNHV4AICUAQyBDCYUsABdtLmVpd0LmPOlNS8+/5Hi9IvWaz8vVL/p3i30dVpVI1acakGnGaUk12pnzMxqdS+rrO42rISAAAAAA+oHKukO/V5r/q8OMLOCp/8nxl+i+JtdFTtxRP1YPX5O7N2/RrBbUgAAAAAAFUW0+HMIXVVi1xzkkZ46uaAlBAgCGEqWAAhkCG8ciRv2xWoes6a7ab/iWz3ePbB+z+q9xh9fi/Tyd0cS3vTs3fj7Z5hsKKTQCAAAAAHk1W/p6bp1xeV+MKMHJL8T7F73hHTHSb3irnmyRjpNp+HEatWpXrTrVpb1WpJznLvbeWfQRERERD5mZmZmZUEoAAAAAAAAAGyHZzQBBAjIEMJQBDIENgQwNi2CnjWa0eOJW74eUo/wDpQ9RjeKPu0PTZ/emP6/034xW8AAAAABoXSheVUrKyTSozzVku9rgjS9PpHm7J9SvPirQDTZQAAAAAAAAAAbGdXNAEZCVLfACADIENgQ2BSEtg2GklruM8XRl+n7FH1D+H8r3p38/4l0IxG+AAAAABzjpRkvtGwjnregk8dvtGr6f7Z+7G9TmItDSzQZqAAAAAAAAAADYjq5oyE6UtgQAAhsgQ2BAHlubqnR4e1PuOWTJFXfFhtef6dH6LqHp9lby5aTr1LuSbxxUYxjwXhzfvM7qLWyUmGp01a4reGye4zGkBIAAAAMN0gWkamwt7VrRW/SqU6lNvse/GP0bNDpe6sbUOpit7alxuMs8DQpli3iWVlwTWdxwk6uEgAAAAAAAADYcnV40pyBAACMoCH5EJW5VYR5zj8TzN6xzL1GO9uIeW7ukqMlTznvON88a1VYxdNO92Yzl4+JUncr/HDr/QvcKez97bvG9Su3LHhKEcfNMDdbqyU8ypYUu7vKuXp9+arGPPMeJY2cJQeJpp+JUmJjlaraJjcGCHpAExTnLdim33ImImeETMRy91rYcp1v7S1iwfNlbJn+Ktf6V68aGxdxT/ANetSpr+5S/6lvhV5cPH9i7TTcMnfHk1HlTy4Jmd1Th9x2i0Sr2xXrzAenifABAAAAAAZ/J1eEAAKZzUIOUuSPMz2xuU1rN51DwVLmpJvclurwKds1p4aNOmxxHmFlyk+cm/ec5taeZdopWOIRxPL0t1/wCXjvYFgDoXQveqlrV/ZSfC4t1Uj5wf7T+QHX0gLdWNOSaqJNePYebUi0alNZms+GFvqun26bjeUI4fWi6iK2TpZiN1hbx5LWnVoNPnaXcsq6pNLhuxmsnnH01rebQ95bzTxEMzSpU6UcU4pLvLUUrXiFK17W5Xj28uY9NV7u2+m2EZcZTlWlHy4J/NgcqAv0PZa8QLoEYXcTFpjiUTWJ5g3V2cD3XJaHK2Ckx4jyt44lqs7jahak0nUhLygAAAzx1eAgQB4LyrvT3E+qufmU899zpodLj7a7nl5zgtAAC1X5JAWAM7sPqH2ZtVp1xJ4g6vo5t8t2XVf1A+heXADSukPXPV6H2VbSXpq8c1sfdg+z38Sxgx7ncrfS4tz3S53hZykvgW2gYTaeOK5PuCG9bA7QVPWPsy9qymp8aE5vLz+ErZsfjuhS6jF47qugFVScK6UdQ9d2tr04vMLWEaK8+b+oGogXqHagLwAABTJZOuK2p0r9RTdd/KgtKCAAADPHR4RkCirPcpyfwPN51D3SndaIYttt5Znzztr8RoIAABZuPu+8CyBMZShJSg8NPK8wPo/Z7UFqmh2V7F/wA2jFv83b8wNP1fYrVru+r3Su7atOtNye85Qa7lyfLh8C1TPSI0vY+ppWIrpptxQqW1erQrRcatOTjJeJYiYmNwtxaJjcKYR36kYR4yk0l5skmdN40/YCtCpTrXWpOlKLUkreHWi/CT4fIrW6jfiIUrdXHEQ3i8uI2trWuKjSjSg5vPgiqpvmm9uZXt7Xu55cq1SVR58WBZx3gXrftAvAAADsH9i1LmXaTuGXlp23mEHp4AAGdOjwjIHkvpdSMe/iyv1NvGlzpa7tNnkKi8AAAFFRReN54Asy3Pu5AoA7D0OakrjRLjT5y69rUzFZ+7Lj9cgdAwByHbGantLfcsKaXyL+L2Q1MH8cMVQn6K4pVeHUnGXwZ7nzWYdbRuJh3GnJVKcai5SimveZ0sefEtR6VdT9Q2Tq0ovFS8mqEfJ8X8kyEOHAVxlBe0mBfg4Y6uAKgAAABRNFjBPwp9VX/soO6oAAM3k6PCCYS8N436bHYihn9zR6WNY1k5LAAAAWbjlECy1xAAbr0R16lLa30UH1KttPfXfhrH1YHbFxA4ztG3LXr9vn6Zmhj9kNbDH7cMc+OT26O1aHOVTR7OcnxdGOfgZt/dLHvGrS5j0z16ktU062b/AIUKE5peLlj6L6kPLnIAC9QSbb7gLwAAAAiXI6Yp1Zyzxuk7Wy38syOEBIB//9k="
        alt="Aryan image"
      />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Aryan Basatia</h1>
      <p>
        Computer Science Engineering student at JMIETI, Radaur with a strong
        interest in web development. Currently learning React and modern
        frontend technologies while building projects to strengthen my
        development skills.
      </p>
    </div>
  );
}
function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="Html" emoji="🔥" color="yellow" />
      <Skill skill="CSS" emoji="💥" color="orange" />
      <Skill skill="Javascript" emoji="👶🏻" color="red" />
      <Skill skill="React" emoji="👶🏻" color="red" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span> <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
