import { createPinia } from "pinia";
import language from './modules/language'
import Wallet from './modules/wallet'
import usersInfo from './modules/usersInfo'
import workFlow from './modules/workFlow'
import expertMode from './modules/expertMode'
import network from './modules/network'

export default createPinia();
export const useLanguage = language
export const useWallet = Wallet
export const useUsersInfo = usersInfo
export const useWorkFlow = workFlow
export const useExpertMode = expertMode
export const userNetwork = network