import { LoadingOutlined } from "@ant-design/icons";

const Loading = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

  return (
    <div id="loading">
      <div class="icon">{antIcon}</div>
      <div style={{ fontSize: 32 }}>Loading...</div>
    </div>
  );
};

export default Loading;
