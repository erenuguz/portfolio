import {statusData} from '../data/statusData';
import './StatusBadge.css';

export default function StatusBadge() {
    return (
        <div className="status-badge">
            <span>{statusData.label}</span>
            <span className="status-badge__pill">
                {statusData.status}
                <span aria-hidden="true">›</span>
            </span>
        </div>
    );
}
