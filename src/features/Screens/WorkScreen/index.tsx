import { WorkFlowTab } from "@shared/ui/WorkFlow";

import "./styles.scss";
import { Slide } from "react-awesome-reveal";

export const WorkScreen = () => {
  return (
    <>
      <div className="mobile main m-auto flex items-center mt-16">
        <h3 className="text-center">
          Процесс <span className="orange">Работы</span>
        </h3>
        <div className="work-container">
          <WorkFlowTab
            tabName="Брифинг и техническое задание"
            tabAdditionalText="Для четкого понимания поставленной задачи, работа над веб-сайтом начинается с опроса клиента и заполнения брифа. Для более сложных проектов составляется техническое задание."
            tabUnderText="1-2 Дня"
            tabNumber="01"
            numberColor="text-custom-orange"
            marginTop="mt-4"
            containerMarginTop="mt-12"
            bgImage="editor"
          />
          <WorkFlowTab
            tabName="Дизайн и
          прототипирование"
            tabAdditionalText="На основе брифа либо техзадания, команда дизайнеров создает интерактивный дизайн-макет и прототип будущего сайта. На этой стадии разработки с клиентом обсуждается и согласовывается визуальная составляющая, интерфейс и пользовательский опыт."
            tabUnderText="2-7 Дней"
            tabNumber="02"
            numberColor="text-custom-black"
            marginTop="mt-4"
            containerMarginTop="mt-12"
            bgImage="design"
          />
          <WorkFlowTab
            tabName="Вёрстка
          и программирование"
            tabAdditionalText="После согласования дизайн-макета за работу принимается команда разработчиков. Фронтенд и бэкенд специалисты воплащают дизайн в рабочее решение с главным приоритетом - максимально быстрой загрузки сайта."
            tabUnderText="2-7 Дня"
            tabNumber="03"
            numberColor="text-custom-orange"
            marginTop="mt-4"
            containerMarginTop="mt-12"
            bgImage="code"
          />
          <WorkFlowTab
            tabName="Наполнение сайта
          контентом"
            tabAdditionalText="После согласования дизайн-макета за работу принимается команда разработчиков. Фронтенд и бэкенд специалисты воплащают дизайн в рабочее решение с главным приоритетом - максимально быстрой загрузки сайта."
            tabUnderText="2-7 Дня"
            tabNumber="04"
            numberColor="text-custom-black"
            marginTop="mt-4"
            containerMarginTop="mt-12"
            bgImage="content"
          />
          <WorkFlowTab
            tabName="Тестирование и перенос
          на постоянный хостинг"
            tabAdditionalText="По завершении разработки мы переносим сайт на постоянный хостинг, проводим различные тестирования сайта на нагрузки, стабильную работу всего функционала, выявляем и устраняем возможные ошибки."
            tabUnderText="1 День"
            tabNumber="05"
            numberColor="text-custom-orange"
            marginTop="mt-4"
            containerMarginTop="mt-12"
            bgImage="settings"
          />
        </div>
      </div>
      <div className="pc m-auto flex items-start justify-between mt-40">
        <Slide direction="right" className="w-full" cascade damping={0.3}>
          <WorkFlowTab
            tabName="Брифинг и техническое задание"
            tabAdditionalText="Для четкого понимания поставленной задачи, работа над веб-сайтом начинается с опроса клиента и заполнения брифа. Для более сложных проектов составляется техническое задание."
            tabUnderText="1-2 Дня"
            tabNumber="01"
            numberColor="text-custom-orange"
            marginTop="mt-0"
            containerMarginTop="mt-0"
            bgImage="editor"
          />
          <WorkFlowTab
            tabName="Дизайн и
          прототипирование"
            tabAdditionalText="На основе брифа либо техзадания, команда дизайнеров создает интерактивный дизайн-макет и прототип будущего сайта. На этой стадии разработки с клиентом обсуждается и согласовывается визуальная составляющая, интерфейс и пользовательский опыт."
            tabUnderText="2-7 Дней"
            tabNumber="02"
            numberColor="text-custom-black"
            marginTop="mt-0"
            containerMarginTop="mt-0"
            bgImage="design"
          />
          <WorkFlowTab
            tabName="Вёрстка
          и программирование"
            tabAdditionalText="После согласования дизайн-макета за работу принимается команда разработчиков. Фронтенд и бэкенд специалисты воплащают дизайн в рабочее решение с главным приоритетом - максимально быстрой загрузки сайта."
            tabUnderText="2-7 Дня"
            tabNumber="03"
            numberColor="text-custom-orange"
            marginTop="mt-0"
            containerMarginTop="mt-0"
            bgImage="code"
          />
          <WorkFlowTab
            tabName="Наполнение сайта
          контентом"
            tabAdditionalText="После согласования дизайн-макета за работу принимается команда разработчиков. Фронтенд и бэкенд специалисты воплащают дизайн в рабочее решение с главным приоритетом - максимально быстрой загрузки сайта."
            tabUnderText="2-7 Дня"
            tabNumber="04"
            numberColor="text-custom-black"
            marginTop="mt-0"
            containerMarginTop="mt-0"
            bgImage="content"
          />
          <WorkFlowTab
            tabName="Тестирование и перенос
          на постоянный хостинг"
            tabAdditionalText="По завершении разработки мы переносим сайт на постоянный хостинг, проводим различные тестирования сайта на нагрузки, стабильную работу всего функционала, выявляем и устраняем возможные ошибки."
            tabUnderText="1 День"
            tabNumber="05"
            numberColor="text-custom-orange"
            marginTop="mt-0"
            containerMarginTop="mt-0"
            bgImage="settings"
          />
        </Slide>
      </div>
    </>
  );
};
