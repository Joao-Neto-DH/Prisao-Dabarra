import Conexao from "@/modules/database/Conexao";
import CriminosoModel from "./Criminoso";
import HistoricoCriminalModel from "./HistoricoCriminal";

const conexao = new Conexao();

const criminosoModel = new CriminosoModel(conexao);
const historicoCriminal = new HistoricoCriminalModel(conexao);

export { criminosoModel, historicoCriminal };
