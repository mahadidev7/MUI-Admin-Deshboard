import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

 const menuData = [
    {
        title: "Manage Team",
        to: "/team",
        icon: <PeopleOutlinedIcon />
    },
    {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />
    },
    {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />
    },
]

const menupages= [
    {
        title: "Profile Form",
        to: "/form",
        icon: <PersonOutlinedIcon />
    },
    {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />
    },
    {
        title: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlineOutlinedIcon />
    },
]

 const menucharts= [
    {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlinedIcon />
    },
    {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlinedIcon />
    },
    {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />
    },
    {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />
    },
]


export  {menuData,  menupages, menucharts} ;