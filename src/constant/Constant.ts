import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiMedicalPackAlt } from "react-icons/gi";
import { PiClockClockwiseBold } from "react-icons/pi";
import { BsHeartPulse } from "react-icons/bs";
import { MdOutlineAssessment, MdOutlineLocalPharmacy } from "react-icons/md";
import { TbLogout2, TbMessage } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";

export const individualItems = [
  { eventKey: "1", label: "Talk to a Provider" },
  { eventKey: "2", label: "Symptom Checker" },
  { eventKey: "3", label: "Educational Library" },
  { eventKey: "4", label: "Medical Supplies" },
  { eventKey: "5", label: "Wellness Assessment" },
  { eventKey: "6", label: "Online Prescription" },
];

export const providerItems = [
  { eventKey: "1", label: "Join Our Network" },
  { eventKey: "2", label: "FAQ's" },
];

export const aboutUsItems = [
  { eventKey: "1", label: "Who We Are" },
  { eventKey: "2", label: "Why Trust Us" },
  { eventKey: "3", label: "Who We Work With" },
  { eventKey: "4", label: "Newsroom" },
  { eventKey: "5", label: "Contact Us" },
];

export const navigationLinks = [
  { eventKey: "1", icon: IoHomeOutline, label: "Home" },
  { eventKey: "2", icon: LuPhone, label: "Talk to a Provider" },
  { eventKey: "3", icon: GoChecklist, label: "Symptom Checker" },
  { eventKey: "4", icon: VscFolderLibrary, label: "Education Library" },
  { eventKey: "5", icon: GiMedicalPackAlt, label: "Medical Supplies" },
  { eventKey: "6", icon: PiClockClockwiseBold, label: "Past Appointments" },
  { eventKey: "7", icon: BsHeartPulse, label: "Health Profile" },
  { eventKey: "8", icon: MdOutlineAssessment, label: "Assessment" },
  { eventKey: "9", icon: MdOutlineLocalPharmacy, label: "Pharmacy" },
  { eventKey: "10", icon: TbMessage, label: "Message" },
  { eventKey: "11", icon: AiOutlineSafety, label: "Insurance" },
  { eventKey: "12", icon: IoSettingsOutline, label: "Settings" },
  { eventKey: "13", icon: TbLogout2, label: "Log Out" },
];
