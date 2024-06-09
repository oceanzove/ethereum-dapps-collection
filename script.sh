#!/bin/sh

# Определяем текущую платформу
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac

# Выполняем действия, специфичные для платформы
if [ "${machine}" = "MinGw" ]; then
    echo "Вы используете, Windows!"
elif [ "${machine}" = "Mac" ]; then
    echo "Вы используете, macOS!"
else
    echo "Неизвестная платформа!"
fi

# Функция для отображения текста в цвете
colorize() {
    color=$1
    text=$2
    case $color in
        red)    tput setaf 1;;
        green)  tput setaf 2;;
        *)      tput sgr0;;
    esac
    echo -n "$text"
    tput sgr0
}

# Список папок
directories=(
"ethereum-address-dapp"
"ethereum-bank-deposit"
"ethereum-dice-dapp"
"ethereum-dice-dapp2"
"ethereum-donation-dapp"
"ethereum-dragonfarm-dapp"
"ethereum-dragonforge-dapp"
"ethereum-grades-dapp"
"ethereum-insurance-dapp"
"ethereum-luckyseven-dapp"
"ethereum-mycoin-dapp"
"ethereum-owner-dapp"
"ethereum-react-dapp"
"ethereum-rlottery-dapp"
"ethereum-split-dapp"
"ethereum-transaction-dapp"
"ethereum-voter-dapp"
"ethereum-voting-dapp"
"ethreum-genereateseed-dapp"
)

# Отображаем папки с цветами
echo -n "Легенда: "
colorize $"green" $"■"
echo -n " - запуск возможен"
colorize $"red" $" ■"
echo -n " - запуск невозможен"
echo ""
for i in "${!directories[@]}"; do
    case "${directories[$i]}" in
        "ethereum-dice-dapp2" | "ethereum-voting-dapp") color="red";;
        *) color="green";;
    esac
    colorize $color "${i}. ${directories[$i]}"
    echo ""
done

# Выбор папки
echo "Выберите папку по номеру:"
read choice

if [ "$choice" -ge 0 ] 2>/dev/null && [ "$choice" -lt "${#directories[@]}" ]; then
    selected_dir="${directories[$choice]}"
    echo "Вы выбрали ${selected_dir}"
    # Выполняем инструкции в выбранной папке
    cd "$selected_dir" || exit
    echo "Текущая директория: $(pwd)"
     if [ "${machine}" = "MinGw" ]; then
            # Открываем новый терминал и выполняем npm ganache
            start /wait cmd /k "npm run start-ganache"
            # После завершения работы открываем еще один терминал и выполняем npm start
            start /wait cmd /k "npm start"
    elif [ "${machine}" = "Linux" ]; then
        # Открываем новый терминал и выполняем npm ganache
        gnome-terminal -- bash -c "npm run ganache; exec bash"
        # После завершения работы открываем еще один терминал и выполняем npm start
        gnome-terminal -- bash -c "sleep 5; npm start; exec bash"
    elif [ "${machine}" = "Mac" ]; then
        # Для macOS используем osascript
        osascript -e 'tell application "Terminal" to do script "cd '$(pwd)' && npm run start-ganache"'
        osascript -e 'tell application "Terminal" to do script "cd '$(pwd)' && npm start"'
    fi
else
    echo "Неверный выбор!"
fi
