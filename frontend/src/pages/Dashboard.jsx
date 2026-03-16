import { useEffect, useState } from "react";
import { API } from "../api/api";
import { Responsive } from "react-grid-layout";
import { useNavigate } from "react-router-dom";

import WidgetRenderer from "../components/WidgetRenderer";

export default function Dashboard() {

    const [layout, setLayout] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        loadDashboard();

    }, []);


    const loadDashboard = async () => {

        try {

            const res = await API.get("/dashboard");

            if (res.data?.layout) {

                setLayout(res.data.layout);

            }

        } catch (error) {

            console.error("Dashboard load error:", error);

        }

    };


    /* -----------------------------
       EMPTY DASHBOARD
    ----------------------------- */

    if (!layout.length) {

        return (

            <div className="flex flex-col items-center justify-center h-[70vh]">

                <h2 className="text-xl font-semibold text-gray-700">

                    No widgets configured

                </h2>

                <p className="text-gray-400 mt-2">

                    Click Configure Dashboard to add widgets

                </p>

                <button
                    onClick={() => navigate("/configure")}
                    className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                >

                    Configure Dashboard

                </button>

            </div>

        );

    }


    return (

        <div className="p-6">

            <Responsive
                layouts={{ lg: layout }}

                breakpoints={{
                    lg: 1200,
                    md: 996,
                    sm: 768,
                    xs: 480,
                    xxs: 0
                }}

                cols={{
                    lg: 12,
                    md: 10,
                    sm: 6,
                    xs: 4,
                    xxs: 2
                }}

                rowHeight={60}
                width={1200}

                isDraggable={false}
                isResizable={false}

            >

                {layout.map(widget => (

                    <div key={widget.i} className="bg-white shadow rounded p-3">

                        <WidgetRenderer widget={widget} />

                    </div>

                ))}

            </Responsive>

        </div>

    );

}