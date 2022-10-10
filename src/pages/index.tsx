import './index.less';
import VIDEO from '@/video/video.mp4';

export default function IndexPage() {
  return (
    <div className="home-page">
      <div className="video">
        <h1>index page</h1>
        <video preload="metadata" controls type="video/mp4">
          <source src={VIDEO}></source>
        </video>
      </div>
    </div>
  );
}
