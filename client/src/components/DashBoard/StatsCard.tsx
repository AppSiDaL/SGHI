export default function StatsCard() {
    return (
        <div className="surface-ground px-4 py-5 md:px-6 lg:px-8">
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
              <div className="surface-card shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">Total de Piezas</span>
                    <div className="text-900 font-medium text-xl">152</div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-gray-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-cog text-gray-700 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">24 nuevas </span>
                <span className="text-500">desde el mes pasado</span>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="surface-card shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">Total de Ordenes</span>
                    <div className="text-900 font-medium text-xl">112</div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-orange-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-file text-red-500 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">10 nuevas </span>
                <span className="text-500">desde el mes pasado</span>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="surface-card shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">
                      Piezas terminadas
                    </span>
                    <div className="text-900 font-medium text-xl">281</div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-check text-cyan-500 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">20 </span>
                <span className="text-500">nuevas </span>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <div className="surface-card shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                  <div>
                    <span className="block text-500 font-medium mb-3">
                      Prioridades 1
                    </span>
                    <div className="text-900 font-medium text-xl">3</div>
                  </div>
                  <div
                    className="flex align-items-center justify-content-center bg-purple-100 border-round"
                    style={{ width: "2.5rem", height: "2.5rem" }}
                  >
                    <i className="pi pi-info text-purple-500 text-xl"></i>
                  </div>
                </div>
                <span className="text-green-500 font-medium">5 </span>
                <span className="text-500">atentidas</span>
              </div>
            </div>
          </div>
        </div>
      );
}
