import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routers/index.jsx'
import { ConfigProvider} from 'antd';


// const theme={
//   token: {
//     colorPrimary: "#1677ff",
//     colorInfo: "#1677ff",
//     colorSuccess: "#52c41a",
//     colorError: "#ff0003",
//     colorWarning: "#fadb14",
//     colorTextBase: "#ffffff",
//     colorBgBase: "#000000",
//     borderRadius: 10,
//   },

// }



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
          colorPrimary: "#1677ff",
          colorInfo: "#1677ff",
          colorSuccess: "#52c41a",
          colorError: "#ff0003",
          colorWarning: "#fadb14",
          colorTextBase: "#000000",
          colorBgBase: "#000000",
          borderRadius: 10,
          colorBgContainer: '#f6ffed',
          fontSize  : 14

        // Alias Token
      },
    }}
  >
        <RouterProvider router={routes} />
    </ConfigProvider>
  </React.StrictMode>,
)
