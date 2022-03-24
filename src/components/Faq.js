import { useState } from "react";
import ChevronUp from "../Assets/chevron-up";
import "./Faq.css";

function Faq() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if(selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }


  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="faqItem">
            <div className="faqTitle" onClick={()=>toggle(i)}>
              <h3>{item.head}</h3>
              <div className={selected === i ? 'rotate' : 'rotate down'}><ChevronUp  /></div>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    head: "What is IEEE?",
    para:
      "IEEE is an organization for advancing technology for humanity. Apart from being the largest professional society in the world, it is most active in NCU. Headquarters in NY, IEEE provides multiple opportunities to network, collaborate and volunteer in the scope of technology with ideas new and radical.",
  },
  {
    head: "How do I get my membership certificate from IEEE Collabratec?",
    para:
      "1. Log into Collabratec. 2. Click on your name in the top right of the screen and select “Member Certificates” from the drop-down menu. 3. From the Member Certificates page, click on the “Download PDF” link to the right for you IEEE Society. 4. Open the PDF and print it. 5. Proudly display in your workplace.",
  },
  {
    head: "How to volunteer in the executive committee?",
    para:
      "Contact the executive community and portray your interest in volunteering for them. Everyone goes through a phase of Catch 22, “to get a job you need required experience, to get an experience you need a job”. Start from the ground by coordinating in events, talking to Student Branch chair and from that build your way up. Apply for volunteering regularly released on all IEEE Social Media handles.",
  },
  {
    head: "How to get exposure through IEEE?",
    para:
      "IEEE organizes various sectional, national and international events. Apply for them, initially as a delegate. Opportunities are released regularly on IEEE NCU social media handles. Work as a volunteer, attend technical skill development workshops and contribute your ideas in whatever way you can. This starts from a small point and then in the grand scheme of things, it snowballs and helps you come out in the best version of yourself.",
  },
  {
    head: "Do I need special degree to be an Author?",
    para:
      "Go to this link and then click “Create a new petition”. Then choose your details and click on the chapter you want to bring it to your student branch. Kindly note, you must have a membership in that chapter. Then you require 2 endorsements from branch counselor and chapter advisor, 6 signatures from Student Members (get them memberships too) and then wait for approvals from HQ.",
  },
];
export default Faq;
