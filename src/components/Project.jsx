import { useNavigate } from "react-router-dom";

export default function Project({ projectAttributes, projectId }) {
    const navigate = useNavigate()
    const formatedDate = new Date(projectAttributes.createdAt).toLocaleString();
    return (
      <>
        <div className="bg-white p-4 rounded-lg text-left h-auto cursor-pointer" 
        onClick={() => navigate(`/projects/project/${projectId}`)}
        >
          <div className="flex">
            <div className="h-12 w-12 bg-[--primary-bg-color] text-center pt-2">
              <span className="text-2xl font-semibold">M</span>
            </div>
            <div>
              <p className="t text-gray-600 ms-3">{projectAttributes.projectTitle }</p>
              <p className="t text-gray-400 ms-3 text-xs">{formatedDate}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  