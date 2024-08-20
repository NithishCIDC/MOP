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
  { path: "/Home", icon: IoHomeOutline, label: "Home" },
  { path: "/Provider", icon: LuPhone, label: "Talk to a Provider" },
  { path: "3", icon: GoChecklist, label: "Symptom Checker" },
  { path: "/EducationLibrary", icon: VscFolderLibrary, label: "Education Library" },
  { path: "5", icon: GiMedicalPackAlt, label: "Medical Supplies" },
  { path: "/PastAppointments", icon: PiClockClockwiseBold, label: "Past Appointments" },
  { path: "7", icon: BsHeartPulse, label: "Health Profile" },
  { path: "8", icon: MdOutlineAssessment, label: "Assessment" },
  { path: "9", icon: MdOutlineLocalPharmacy, label: "Pharmacy" },
  { path: "10", icon: TbMessage, label: "Message" },
  { path: "11", icon: AiOutlineSafety, label: "Insurance" },
  { path: "12", icon: IoSettingsOutline, label: "Settings" },
  { path: "13", icon: TbLogout2, label: "Log Out" },
];

export const Options: { value: string; label: string }[] = [
  { value: "62317ec862cde570bb7b82b1", label: "Hip" },
  { value: "62317ed262cde570bb7b82b3", label: "Knee" },
  { value: "62317ed862cde570bb7b82b5", label: "Shoulder" },
  { value: "62317edf62cde570bb7b82b7", label: "Hand & Wrist" },
  { value: "62317ee562cde570bb7b82b9", label: "Foot & Ankle" },
  { value: "62317eec62cde570bb7b82bb", label: "Spine" },
  { value: "6406bb2f2c03199bdbbc7f23", label: "Neck" },
  { value: "6406bb452c03199bdbbc7f24", label: "Back" },
  { value: "6406cfc02c03199bdbbc7f31", label: "Elbow" },
];
